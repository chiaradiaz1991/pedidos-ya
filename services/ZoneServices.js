
const Zone = require('../schema/Zone')

class ZoneServices {
  add(data) {
    const name = data.name;
    const newZone = new Zone({ name });
    
    return newZone.save();
  }

  get() {
    const query = Zone.find({}).exec();
    return query;
  }

  // getById(name) {
  //   const query = Zone.findOne({name}).exec();
  // }

}

module.exports = ZoneServices;