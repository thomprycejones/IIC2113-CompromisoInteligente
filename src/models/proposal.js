module.exports = function defineProposal(sequelize, DataTypes) {
  const Proposal = sequelize.define('Proposal', {
    id_candidate :  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    date:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: DataTypes.TEXT,
    context:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Proposal.associate = function associate(models) {
    Proposal.belongsTo(models.Candidate, {foreignKey: 'id_candidate'});
  };

  Proposal.findProposalsByCandidate = function findProposalsByCandidate(elementId) {
    return Proposal.findAll({
      where: {
        id_candidate: elementId,
      },
      include: ['Candidate']
    });
  }

  return Proposal;
};