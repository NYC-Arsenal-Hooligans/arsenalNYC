const _db = require('./connection');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const createSecure = (password) =>
  new Promise((resolve, reject) =>
    bcrypt.genSalt((err,salt) =>
      bcrypt.hash(password, salt, (err, hash) =>
        err ? reject(err) : resolve(hash)
      )
    )
  )

module.exports = {
  listMembers (req, res, next){
    _db.any(`SELECT * FROM members;`)
       .then(members => {
        res.members = members;
        next();
       })
       .catch(error => {
        console.log('Error===========', error)
       })
  },

  getUserByMemberEmail(req, res, next){
    _db.one(`
      SELECT *
      FROM members
      WHERE email = $/email/;`, req.body)
    .then(member => {
      if(bcrypt.compareSync(req.body.password, user.password_digest)){
        res.member = member;
      } else {
        res.error = true;
      }
      next();
    })
    .catch(error=>{
      console.log('Error=======', error);
      res.error = error;
      next();
    })
  },

  createMember(req, res, next){
    console.log('=====', req.body)
    createSecure(req.body.password)
    .then(hash => {
      _db.one(`
        INSERT INTO members (name, email, password_digest, address, city, state, zipcode
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        returning *;`, [req.body.name, req.body.email, hash, req.body.address, req.body.city, req.body.state, req.body.zidcode]
        )
      .then(newMember => {
        rea.member = newMember;
        next()
      })
      .catch(err => {
        console.log(err);
        next();
      })
    })
  },

  getMemberEvents(req, res, next) {
    let mID = parseInt(req.params.id)
    _db.any(`SELECT title, image_link, event_date, event_time
      FROM members
      JOIN saved_events
      ON saved_events.user_reference = members.user_id
      WHERE members.user_id = $1;`, [mID])
      .then(memberEvents => {
        res.events = memberEvents;
        next();
      })
      .catch(error => {
        console.log('error', error)
        res.error = error;
        next();
      })
  },

  addMemberEvent(req, res, next){
    let mID = parseInt(req.params.id)
    _db.one(`
      INSERT INTO
      saved_events (user_reference, title, image_link, event_date, event_time)
      VALUES ($1, $2, $3, $4, $5)
      returning *;`, [mID, req.body.title, req.body.image_link, req.body.event_date, req.body.event_time]
      )
    .then(saved_events => {
      console.log("added event successfully");
      res.rows = saved_events;
      next();
    })
    .catch(error => {
      console.log('error in adding event', req.body)
    })
  },

  deleteMemberEvent(req, res, next){
    let mID = parseInt(req.params.id);
    _db.none(`
      DELETE FROM saved_events
      WHERE title = $1
      AND user_reference = $2;`, [req.body.title, mID]
      )
    .then(() => {
      console.log('deleted event successfully');
      next();
    })
    .catch(error => {
      console.log('error in deleting event', error)
    })
  }
}

















