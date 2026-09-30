import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const inputClass =
  'mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10'

const Addemp = () => {
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    const form = e.currentTarget
    // Connect this form to your employee API here.

  const employee = Object.fromEntries(new FormData(form).entries())

  try {
    const response = await axios.post('http://localhost:3000/post',employee)
    navigate('/allemp')
    console.log('Server response:', response.data)
  console.log('Created employee:', response.data.employee)
    form.reset()
    
  } catch (error) {
    console.error('Failed to add employee:', error.response?.data || error.message)
  }

  }

  

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-xl font-bold tracking-tight text-emerald-800">
            People<span className="text-slate-900">Hub</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-emerald-700">
              Home
            </Link>
            <Link to="/allemp" className="text-sm font-medium text-slate-600 hover:text-emerald-700">
              Employees
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <Link
          to="/allemp"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-700"
        >
          <span aria-hidden="true">←</span> Back to employees
        </Link>

        <div className="mb-8 mt-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Employee records
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Add an employee
          </h1>
          <p className="mt-3 text-slate-600">
            Enter the employee’s details below to create a new team record.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="mb-7 border-b border-slate-100 pb-5">
            <h2 className="text-lg font-semibold">Personal and work details</h2>
            <p className="mt-1 text-sm text-slate-500">
              Fields marked with <span className="text-red-500">*</span> are required.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Full name <span className="text-red-500">*</span>
              <input
                className={inputClass}
                type="text"
                name="name"
                placeholder="e.g. Jordan Lee"
                autoComplete="name"
                required
              />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Email address <span className="text-red-500">*</span>
              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder="jordan@company.com"
                autoComplete="email"
                required
              />
            </label>
             <label className="text-sm font-medium text-slate-700">
              Gender <span className="text-red-500">*</span>
              <select className={inputClass} name="gender" defaultValue="" required>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                
              </select>
            </label>

            <label className="text-sm font-medium text-slate-700 ">
              Job title <span className="text-red-500">*</span>
              <input
                className={inputClass}
                type="text"
                name="title"
                placeholder="e.g. Product Designer"
                required
              />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Department <span className="text-red-500">*</span>
              <select className={inputClass} name="department" defaultValue="" required>
                <option value="" disabled>Select a department</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="human-resources">Human Resources</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
                <option value="finance">Finance</option>
                <option value="operations">Operations</option>
              </select>
            </label>

            <label className="text-sm font-medium text-slate-700">
              Phone number
              <input
                className={inputClass}
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                autoComplete="tel"
              />
            </label>

            <label className="text-sm font-medium text-slate-700">
               date of Birth <span className="text-red-500">*</span>
              <input className={inputClass} type="date" name="dateOfBirth" required />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Employment type
              <select className={inputClass} name="employmentType" defaultValue="full-time">
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="intern">Intern</option>
              </select>
            </label>

            <label className="text-sm font-medium text-slate-700">
              Employee ID <span className="text-red-500">*</span>
              <input className={inputClass} name='empid' required >
                
              </input>
            </label>

            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              Notes
              <textarea
                className={`${inputClass} min-h-28 resize-y`}
                name="notes"
                placeholder="Add any additional information about you..."
                rows="4"
              />
            </label>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
            <Link
              to="/allemp"
              className="inline-flex justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex justify-center rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-700/20"
            >
              Save employee
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Addemp