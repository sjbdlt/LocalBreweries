const { User } = require('../models');

const userdata = [
  {
    name: 'Steven Blake',  
    email: 's@b.com' ,
    member_date: 'November 22, 2023 08:30:00',
    password: 'Brew123'
  },  
  {
    name: 'Brandon Kelly',  
    email: 'b@k.com' ,
    member_date: 'November 22, 2023 08:30:00',
    password: 'Brew123'
  },  
  {
    name: 'Shawn Clarke',  
    email: 's@c.com' ,
    member_date: 'November 22, 2023 08:30:00',
    password: 'Brew123'
  },  
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;