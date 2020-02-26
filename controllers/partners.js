const { Partner } = require("../models");

/**
 * @description Get all partnets
 * @route GET /api/v1/partners
 */
exports.findAll = async (req, res, next) => {
  await Partner.find()
    .then(data => {
      res.status(200).json({
        success: true,
        count: data.length,
        pdvs: data
      });
    })
    .catch(e => {
      res.status(400).json({
        success: false,
        error: e
      });
    });
};

/**
 * @description Get a partner by its id
 * @route GET /api/v1/partner/:id
 */
exports.findById = async (req, res, next) => {
  await Partner.findById(req.params.id)
    .then(data => {
      res.status(200).json({
        success: true,
        pdv: [data]
      });
    })
    .catch(e => {
      res.status(404).json({
        success: false,
        error: e
      });
    });
};

/**
 * @description Creates a partner
 * @route POST /api/v1/partner
 */
exports.create = async (req, res, next) => {
  await Partner.create(req.body)
    .then(data => {
      res.status(201).json({
        success: true,
        data
      });
    })
    .catch(e => {
      res.status(400).json({
        success: false,
        error: e
      });
    });
};

/**
 * @description Searchs for a partner with a
 * given location (coordinates lng and lat)
 *
 * @route POST /api/v1/partner/search
 */
exports.search = async (req, res, next) => {
  await Partner.find({
    coverageArea: {
      $geoWithin: {
        $centerSphere: [          
          [req.body.lng, req.body.lat], 5 / 3963.2 // 5km radius in radians
        ]
      }
    }
  })
    .then(data => {
      res.status(200).json({
        success: true,
        pdvs: data
      });
    })
    .catch(e => {
      res.status(500).json({
        success: false,
        error: e
      });
    });
};
