import { useState } from "react";
import { updateStep1 } from "../../../redux/slices/formSlice";
import { useDispatch } from "react-redux";

const BasicDetails = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    alternateMobile: "",
    email: "",
    time: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    guardianName: "",
    country: "",
    state: "",
    district: "",
    city: "",
    address: "",
    reference: "",
    admissionType: "",
  });

  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
    // if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.age) newErrors.age = "Age is required.";
    if (!formData.gender) newErrors.gender = "Please select a gender.";
    // if (!formData.country) newErrors.country = "Country is required.";
    // if (!formData.address) newErrors.address = "Address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      dispatch(updateStep1(formData));
    }
    setFormData({
      firstName: "",
      lastName: "",
      mobile: "",
      alternateMobile: "",
      email: "",
      time: "",
      dateOfBirth: "",
      age: "",
      gender: "",
      guardianName: "",
      country: "",
      state: "",
      district: "",
      city: "",
      address: "",
      reference: "",
      admissionType: "",
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-6">Patient Details</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:mb-4 lg:mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First name<span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select className="rounded-l-lg border border-r-0 border-gray-300 px- py-2">
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
              </select>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="flex-1 rounded-r-lg border border-gray-300 px-3 py-2"
                placeholder="Enter first name"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
              placeholder="Enter last name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile no.<span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select className="rounded-l-lg border border-r-0 border-gray-300 px-3 py-2">
                <option>+91</option>
              </select>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="flex-1 rounded-r-lg border border-gray-300 px-3 py-2"
                placeholder="Enter mobile number"
              />
            </div>
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alternate mobile no.
            </label>
            <div className="flex">
              <select className="rounded-l-lg border border-r-0 border-gray-300 px-3 py-2">
                <option>+91</option>
              </select>
              <input
                type="tel"
                name="alternateMobile"
                value={formData.alternateMobile}
                onChange={handleInputChange}
                className="flex-1 rounded-r-lg border border-gray-300 px-3 py-2"
                placeholder="Enter alternate mobile number"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-sage-500"
              placeholder="Enter email"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-sage-500"
              placeholder="DD/MM/YYYY"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-sage-500"
              placeholder="Enter (Number only)"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>

          {/* Birth Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Birth Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-sage-500"
            />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Gender<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="text-primary"
                  checked={formData.gender === "Male"}
                  onChange={handleInputChange}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="text-primary"
                  checked={formData.gender === "Female"}
                  onChange={handleInputChange}
                />
                <span>Female</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Others"
                  className="text-primary"
                  checked={formData.gender === "Others"}
                  onChange={handleInputChange}
                />
                <span>Others</span>
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>

          {/* Address Section */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Guardian Name</label>
            <div className="flex">
              <select className="px-3 py-2 border rounded-l-md bg-white w-20">
                <option>S/o.</option>
              </select>
              <input
                type="text"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleInputChange}
                className="flex-1 px-3 py-2 border border-l-0 rounded-r-md"
                placeholder="Enter Full Name"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Country</label>
            <select
              className="w-full px-3 py-2 border rounded-md bg-white"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">State</label>
            <select
              className="w-full px-3 py-2 border rounded-md bg-white"
                     name="state"
              value={formData.state}
              onChange={handleInputChange}
            >
              <option value="Kerala">Kerala</option>
              <option value="Bihar">Bihar</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">District</label>
            <select
              className="w-full px-3 py-2 border rounded-md bg-white"
               name="district"
              value={formData.district}
              onChange={handleInputChange}
            >
              <option value="Munger">Munger</option>
              <option value="Allahabad">Allahabad</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">City / Town</label>
            <select
              className="w-full px-3 py-2 border rounded-md bg-white"
               name="city"
              value={formData.city}
              onChange={handleInputChange}
            >
              <option value="Jamshedpur">Jamshedpur</option>
              <option value="Ranchi">Ranchi</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Full Address</label>
            <input
              type="text"
              name="address"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Reference Section */}
        <div className="space-y-4 mb-6">
          <h2 className="text-lg font-semibold">Reference</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-medium">
                How do you know about us
              </label>
              <select
                className="w-full px-3 py-2 border rounded-md bg-white"
                name="reference"
                value={formData.reference}
                onChange={handleInputChange}
              >
                <option value="linkdln">linkdln</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Refer from</label>
              <select
                className="w-full px-3 py-2 border rounded-md bg-white"
                   name="admissionType"
                value={formData.admissionType}
                onChange={handleInputChange}
              >
                <option value="From friend">From friend</option>
              </select>
            </div>
          </div>
        </div>

        {/* Admission Type */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Admission Type</h2>
          <div className="space-y-2">
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="admissionType"
                  value="Voluntary"
                  className="text-primary"
                  checked={formData.admissionType === "Voluntary"}
                  onChange={handleInputChange}
                />
                <span>Voluntary</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="admissionType"
                  value="Involuntary"
                  className="text-primary"
                  checked={formData.admissionType === "Involuntary"}
                  onChange={handleInputChange}
                />
                <span>Involuntary</span>
              </label>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <select className="w-full px-3 py-2 border rounded-md bg-white">
                  <option>Brought by family</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="relative z-0 h-12 rounded-full bg-[#323e2a] px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-[#323e2a] hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
            type="submit"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
