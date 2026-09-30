

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'


const getEmployees = (data) => {
  if (Array.isArray(data)) return data
  if (Array.isArray(data?.employees)) return data.employees
  if (Array.isArray(data?.allemp)) return data.allemp
  if (Array.isArray(data?.empData)) return data.empData
  if (Array.isArray(data?.data)) return data.data
  if (data?.employee) return [data.employee]
  return []
}

const formatDate = (value) => {
  if (!value) return '—'
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleDateString()
}

const Allemp = () => {
  const [employees, setEmployees] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
       

        const response = await api.get('/allemp')
        setEmployees(getEmployees(response.data))
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            'Could not load employees.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchEmployees()
  }, [])

  const filteredEmployees = employees.filter((employee) =>
    [
      employee.name,
      employee.email,
      employee.title,
      employee.department,
      employee.departmet,
      employee.empid,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-xl font-bold tracking-tight text-emerald-800">
            People<span className="text-slate-900">Hub</span>
          </Link>
          <div className="flex items-center gap-5">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-emerald-700">
              Home
            </Link>
            <Link
              to="/create-emp"
              className="rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              + Add employee
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Team directory
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              All employees
            </h1>
            <p className="mt-2 text-slate-600">
              {employees.length} employee{employees.length === 1 ? '' : 's'} in the directory
            </p>
          </div>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search employees..."
            aria-label="Search employees"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 sm:max-w-xs"
          />
        </div>

        {loading && (
          <p className="mt-10 rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
            Loading employees…
          </p>
        )}

        {!loading && error && (
          <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
            <p className="font-semibold">Could not load employees</p>
            <p className="mt-1 text-sm">{error}</p>
            <p className="mt-2 text-sm">
              Check that your backend is running and `GET /allemp` returns an employee array.
            </p>
          </div>
        )}

        {!loading && !error && filteredEmployees.length === 0 && (
          <div className="mt-10 rounded-xl border border-slate-200 bg-white px-6 py-14 text-center">
            <h2 className="text-lg font-semibold">
              {employees.length === 0 ? 'No employees yet' : 'No matching employees'}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              {employees.length === 0
                ? 'Add an employee to see their details here.'
                : 'Try a different name, email, title, or employee ID.'}
            </p>
            {employees.length === 0 && (
              <Link
                to="/create-emp"
                className="mt-5 inline-flex rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Add your first employee
              </Link>
            )}
          </div>
        )}

        {!loading && !error && filteredEmployees.length > 0 && (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredEmployees.map((employee, index) => {
              const fields = [
                ['Employee ID', employee.empid],
                ['Email', employee.email],
                ['Job title', employee.title],
                ['Department', employee.department ?? employee.departmet],
                ['Phone', employee.phone],
                ['Employment type', employee.employmentType ?? employee.emptype],
                ['Gender', employee.gender],
                ['Date of birth', formatDate(employee.dateOfBirth)],
              ]

              return (
                <article
                  key={employee._id || employee.empid || index}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="border-b border-slate-100 p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-lg font-bold text-emerald-800">
                        {employee.name?.trim()?.charAt(0)?.toUpperCase() || '?'}
                      </div>
                      <div className="min-w-0">
                        <h2 className="truncate text-lg font-semibold">
                          {employee.name || 'Unnamed employee'}
                        </h2>
                        <p className="truncate text-sm text-slate-500">
                          {employee.title || 'No job title provided'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
                    {fields.map(([label, value]) => (
                      <div key={label} className="min-w-0">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          {label}
                        </dt>
                        <dd className="mt-1 break-words text-sm text-slate-700">
                          {value || '—'}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {employee.notes && (
                    <div className="border-t border-slate-100 px-5 py-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Notes
                      </p>
                      <p className="mt-1 whitespace-pre-wrap break-words text-sm text-slate-700">
                        {employee.notes}
                      </p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        )}
      </section>
    </main>
  )
}

export default Allemp


// const Allemp = () => {
//   useEffect(() => {
//     console.log('Allemp mounted')

//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/allemp')
//         console.log('GET /allemp response:', response.data)
//       } catch (error) {
//         console.error(
//           'GET /allemp failed:',
//           error.response?.data || error.message
//         )
//       }
//     }

//     fetchEmployees()
//   }, [])

//   return <main>Employee list</main>
// }

// export default Allemp