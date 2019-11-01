export default (sequelize, type) => {
  return sequelize.define("song", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: type.STRING,
      allowNull: false
    },
    musicFileUrl: {
      type: type.STRING,
      allowNull: false
    },
    albumId: {
      type: type.INTEGER,
      allowNull: false
    }
  });
};
