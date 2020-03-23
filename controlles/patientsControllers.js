const patients = require('./../data/patients')



function patientsControllers(req, res) {
    req.json(patients)
}

function patientControllers(req, res) {
    var patientId = req.params.id
    var patient = patients[patientId]
    res.json(patient)
}

exports.patients = patientsControllers
exports.patient = patientControllers