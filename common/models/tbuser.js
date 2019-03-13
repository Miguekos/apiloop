'use strict';



module.exports = function(Tbuser) {

  Tbuser.login = function(data, cb) {

    var email = data.email;
    var pass = data.password;
    var ds = Tbuser.dataSource;
    var query = `select * from public.tbuser where email = $1 and password = $2`;
    var params = [email, pass];
    ds.connector.execute(query, params, function(err, data) {
      console.log(data[0]);
      if (err) {
        console.log(err);
        cb(err, null)
      } else {
        if (data[0]) {
          cb(null, data[0])
        } else {
          cb(null, false)
        }
      }
    })
  };


  Tbuser.status = function(data, cb) {

    // console.log(data);
    // cb (null, data);
    var email = data.email;
    var pass = data.password;
    // console.log("login");
    var ds = Tbuser.dataSource;
    var query = `select * from public.tbuser where email = '${email}' and password = '${pass}'`;
    // var params = [email, pass];
    ds.connector.execute(query, function(err, data) {
      // console.log(data);
      cb(err, data);
      // return data
      // if (err) console.error(err);
      // cb(err, data);
    })
  }
};
