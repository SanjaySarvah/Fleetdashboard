'use client';

import React, { useState } from 'react';

interface AdditionalField {
  id: string;
  label: string;
  value: string;
}

const LicenseDetails: React.FC = () => {
  const [licenseCode, setLicenseCode] = useState('LCODE-XYZ-12345');
  const [licenseDuration, setLicenseDuration] = useState('1 Year');
  const [simModel, setSimModel] = useState('');
  const [simImei, setSimImei] = useState('');
  const [gpsPort, setGpsPort] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [deviceInfo, setDeviceInfo] = useState('');
  const [fuelSensor, setFuelSensor] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('Depo');
  const [notes, setNotes] = useState('Add any relevant notes here...');
  const [additionalFields, setAdditionalFields] = useState<AdditionalField[]>([]);

  const addAdditionalField = () => {
    const newField: AdditionalField = {
      id: `additional-${Date.now()}`,
      label: '',
      value: '',
    };
    setAdditionalFields((prev) => [...prev, newField]);
  };

  const removeAdditionalField = (fieldId: string) => {
    setAdditionalFields((prev) => prev.filter((field) => field.id !== fieldId));
  };

  const updateAdditionalFieldLabel = (fieldId: string, label: string) => {
    setAdditionalFields((prev) =>
      prev.map((field) => (field.id === fieldId ? { ...field, label } : field))
    );
  };

  const updateAdditionalFieldValue = (fieldId: string, value: string) => {
    setAdditionalFields((prev) =>
      prev.map((field) => (field.id === fieldId ? { ...field, value } : field))
    );
  };

  return (
    <div className="container  pt-3" >
      <div className="row g-4">

        {/* License Details */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
          
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">License Code</label>
                <input
                  type="text"
                  className="form-control"
                  value={licenseCode}
                  onChange={(e) => setLicenseCode(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">License Duration</label>
                <input
                  type="text"
                  className="form-control"
                  value={licenseDuration}
                  onChange={(e) => setLicenseDuration(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SIM & GPS */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
 
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">SIM Model</label>
                <input
                  type="text"
                  className="form-control"
                  value={simModel}
                  onChange={(e) => setSimModel(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">SIM IMEI</label>
                <input
                  type="text"
                  className="form-control"
                  value={simImei}
                  onChange={(e) => setSimImei(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* GPS Port */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
      
            <div className="card-body">
                   <div className="mb-3">
              <label className="form-label">GPS Port</label>
              <input
                type="text"
                className="form-control"
                value={gpsPort}
                onChange={(e) => setGpsPort(e.target.value)}
              />
              </div>
             <div className="mb-3">
              <label className="form-label">Fuel Sensor</label>
              <input
                type="text"
                className="form-control"
                value={fuelSensor}
                onChange={(e) => setFuelSensor(e.target.value)}
              />
            </div>
            </div>
          </div>
        </div>

        {/* Device & Sensor */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
     
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Device Model</label>
                <input
                  type="text"
                  className="form-control"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Device Info</label>
                <input
                  type="text"
                  className="form-control"
                  value={deviceInfo}
                  onChange={(e) => setDeviceInfo(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>


        {/* Vehicle Details */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">

            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Vehicle Type</label>
                <input
                  type="text"
                  className="form-control"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Vehicle Model</label>
                <input
                  type="text"
                  className="form-control"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
       
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Area</label>
                <input
                  type="text"
                  className="form-control"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

<div className="row g-3">
  {/* Notes */}
  <div className="col-md-6">
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <label className="form-label fw-semibold mb-2">Additional Notes</label>
        <textarea
          className="form-control"
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter notes here..."
        />
      </div>
    </div>
  </div>

  {/* Additional Attributes */}
  <div className="col-md-6">
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <label className="form-label fw-semibold mb-0">Additional Attributes</label>
          <button
            type="button"
            className="btn btn-sm btn-success"
            onClick={() => {
              const id = addAdditionalField();
              // ✅ Automatically focus on the newly added input
              setTimeout(() => {
                const newInput = document.querySelector<HTMLInputElement>(
                  `#attribute-label-${id}`
                );
                newInput?.focus();
              }, 100);
            }}
          >
            + Add Attribute
          </button>
        </div>

        {additionalFields.length > 0 ? (
          additionalFields.map((field) => (
            <div key={field.id} className="border rounded p-3 mb-3">
              <div className="row g-2 align-items-center">
                <div className="col-10">
                  <input
                    id={`attribute-label-${field.id}`}
                    type="text"
                    className="form-control"
                    placeholder="Attribute label"
                    value={field.label}
                    onChange={(e) =>
                      updateAdditionalFieldLabel(field.id, e.target.value)
                    }
                  />
                </div>
                <div className="col-2 text-end">
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeAdditionalField(field.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Attribute value"
                  value={field.value}
                  onChange={(e) =>
                    updateAdditionalFieldValue(field.id, e.target.value)
                  }
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted py-2 border border-2 border-dashed rounded">
            No attributes added yet
          </div>
        )}
      </div>
    </div>
  </div>
</div>


  

        {/* Action Buttons */}
        <div className="col-12 mt-4 border-top pt-2 d-flex justify-content-end gap-2" style={{paddingBottom:'10px'}}>
          <button className="btn btn-outline-secondary px-4">Close</button>
          <button className="btn btn-primary px-4">Activate</button>
        </div>
      </div>
    </div>
  );
};

export default LicenseDetails;
