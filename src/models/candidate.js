module.exports = function defineCandidate(sequelize, DataTypes) {
  const Candidate = sequelize.define('Candidate', {
    name:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    shortname:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    bio: DataTypes.TEXT,
    birthday:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    political_party:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Candidate.associate = function associate(models) {
    Candidate.hasMany(models.Proposal, {foreignKey: 'id_candidate'});
  };
  
  return Candidate;
};