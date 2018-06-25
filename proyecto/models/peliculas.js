const mongoose   = require('mongoose');
const Schema     =mongoose.Schema;

const peliculasSchema  = new Schema({
  nombre: String,
  año: Number,
  categoria: String,
  url: String
});

const peliculasModel = mongoose.model('peliculas', peliculasSchema);

module.exports = {
  create: (req,res,next)=>{
    const pelicula = new peliculasModel({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      año: req.body.año,
      categoria: req.body.categoria,
      url: req.body.url
    });
    pelicula
      .save()
      .then(result => {
        res.status(200).json({
          message: 'pelicula creada con exito',
          data: {
            ...result
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error:err
        });
      });
  },
  find: (req, res, next) => {
    peliculasModel.find()
        .select('_id nombre año categoria url')
        .exec()
        .then(docs => {
          const response = {
            count: docs.length,
            data: docs.map(doc=>{
              return{
                ...doc
              };
            })
          };
          res.status(200).json(response);
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          });
        });
    },
  update: (req,res,next) => {
      const id = req.params.id;
      let updateParams = {
        ...req.body
      };
      peliculasModel.update({_id:id},{$set: updateParams})
          .exec()
          .then(result => {
            res.status(200).json({
              message: 'pelicula Actualizada'
            });
          })
          .catch(err =>{
            console.log(err);
            res.status(500).json({
              error:err
            });
          });
  },
  findOne: (req,res,next)=>{
    const id = req.params.id;
    Plan.findById(id)
        .select('_id nombre año categoria url')
        .exec()
        .then(doc => {
          if (doc) {
            res.status(200).json({
              data: doc,
            });
          }else{
            res.status(404).json({message: 'No valid entry found for provided ID'});
          }
        })
        .catch(err =>{
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
  },
  delete: (req,res,next)=>{
    const id = req.params.id;
    peliculasModel.remove({_id:id})
        .exec()
        .then(result => {
          res.status(200).json({
            message: 'pelicula eliminada'
          });
        })
        .catch(err =>{
          console.log(err);
          res.status(500).json({
            error:err
          });
        });
  }
};
