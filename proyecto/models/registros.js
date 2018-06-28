const mongoose   = require('mongoose');
const Schema     =mongoose.Schema;

const registrosSchema  = new Schema({
  nombre: String,
  apellidos: String,
  correo: String,
  edad: Number
});

const registrosModel = mongoose.model('registros', registrosSchema);

module.exports = {
  create: (req,res,next)=>{
    const registro = new registrosModel({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      correo: req.body.correo,
      edad: req.body.edad
    });
    registro
      .save()
      .then(result => {
        res.status(200).json({
          message: 'registro creado con exito',
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
    registrosModel.find()
        .select('_id nombre apellidos correo edad')
        .exec()
        .then(docs => {
          const response = {
            count: docs.length,
            data: docs.map(doc=>{
              return{
                ...doc["_doc"]
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
      registrosModel.update({_id:id},{$set: updateParams})
          .exec()
          .then(result => {
            res.status(200).json({
              message: 'registro Actualizado'
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
        .select('_id nombre apellidos correo edad')
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
    registrosModel.remove({_id:id})
        .exec()
        .then(result => {
          res.status(200).json({
            message: 'registro eliminado'
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
