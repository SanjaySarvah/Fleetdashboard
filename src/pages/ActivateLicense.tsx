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
  const [notes, setNotes] = useState('');
  const [additionalFields, setAdditionalFields] = useState<AdditionalField[]>([]);

  const addAdditionalField = () => {
    const newField: AdditionalField = {
      id: `field-${Date.now()}`,
      label: '',
      value: '',
    };
    setAdditionalFields((prev) => [...prev, newField]);
  };

  const removeAdditionalField = (id: string) => {
    setAdditionalFields((prev) => prev.filter((f) => f.id !== id));
  };

  const updateField = (id: string, key: 'label' | 'value', val: string) => {
    setAdditionalFields((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [key]: val } : f))
    );
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* License Details */}
        <div className="col-lg-4 col-md-6">
          <h5 className="fw-bold mb-3">License Details</h5>
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
            <select
              className="form-select"
              value={licenseDuration}
              onChange={(e) => setLicenseDuration(e.target.value)}
            >
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
            </select>
          </div>
        </div>

        {/* Device & Sensor */}
        <div className="col-lg-4 col-md-6">
          <h5 className="fw-bold mb-3">Device & Sensor</h5>
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

        {/* SIM & GPS */}
        <div className="col-lg-4 col-md-6">
          <h5 className="fw-bold mb-3">SIM & GPS</h5>
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
          <div className="mb-3">
            <label className="form-label">GPS Port</label>
            <input
              type="text"
              className="form-control"
              value={gpsPort}
              onChange={(e) => setGpsPort(e.target.value)}
            />
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="col-lg-4 col-md-6">
          <h5 className="fw-bold mb-3">Vehicle Details</h5>
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

        {/* Incremental (Dynamic Fields) */}
        <div className="col-lg-4 col-md-6">
          <h5 className="fw-bold mb-3">Incremental Attributes</h5>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-semibold">Add or Edit Attributes</span>
            <button
              className="btn btn-sm btn-success"
              type="button"
              onClick={addAdditionalField}
            >
              + Add
            </button>
          </div>

          {additionalFields.length > 0 ? (
            additionalFields.map((field) => (
              <div
                key={field.id}
                className="border rounded-3 p-2 mb-3 bg-light"
              >
                <div className="d-flex gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Attribute Label"
                    value={field.label}
                    onChange={(e) =>
                      updateField(field.id, 'label', e.target.value)
                    }
                  />
                  <button
                    className="btn btn-outline-danger btn-sm"
                    type="button"
                    onClick={() => removeAdditionalField(field.id)}
                  >
                    ✕
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Attribute Value"
                  value={field.value}
                  onChange={(e) =>
                    updateField(field.id, 'value', e.target.value)
                  }
                />
              </div>
            ))
          ) : (
            <div className="text-muted small border border-dashed rounded p-3 text-center">
              No attributes added yet
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="col-lg-4 col-md-6">
          <h5 className="fw-bold mb-3">Notes</h5>
          <textarea
            className="form-control"
            rows={6}
            placeholder="Add any relevant notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2 mt-4 border-top pt-3">
        <button className="btn btn-outline-secondary px-4">Close</button>
        <button className="btn btn-primary px-4">Activate</button>
      </div>
    </div>
  );
};

export default LicenseDetails;
