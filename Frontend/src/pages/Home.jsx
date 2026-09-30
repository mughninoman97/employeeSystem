import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-xl font-bold tracking-tight text-emerald-800">
            People<span className="text-slate-900">Hub</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-emerald-700">
              Home
            </Link>
            <Link to="/allemp" className="text-sm font-medium text-slate-600 hover:text-emerald-700">
              Employees
            </Link>
            <Link
              to="/create-emp"
              className="rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Add employee
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Employee management
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Great teams start with{' '}
            <span className="text-emerald-700">great organization.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Keep employee information organized and accessible. Manage your team
            records from one simple workspace.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/allemp"
              className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              View employees
            </Link>
            <Link
              to="/create-emp"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              + Add an employee
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 sm:p-9">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Your workspace
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">People overview</h2>
            </div>
            <span className="mt-1 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
          </div>

          <div className="mt-9 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-700">
            ♙
          </div>
          <h3 className="mt-5 text-xl font-bold">Your team, all in one place.</h3>
          <p className="mt-2 leading-7 text-slate-600">
            Add employee details or browse existing team records whenever you need them.
          </p>

          <div className="mt-7 divide-y divide-slate-100 border-t border-slate-100">
            <Link
              to="/allemp"
              className="flex items-center justify-between py-4 font-medium text-slate-700 hover:text-emerald-700"
            >
              Browse employee list <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/create-emp"
              className="flex items-center justify-between py-4 font-medium text-slate-700 hover:text-emerald-700"
            >
              Create a new record <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Get started
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            What would you like to do?
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            to="/create-emp"
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl text-emerald-700">
              +
            </span>
            <span className="flex-1">
              <strong className="block">Add an employee</strong>
              <span className="mt-1 block text-sm text-slate-500">
                Create a new employee record.
              </span>
            </span>
            <span className="text-slate-400 transition group-hover:text-emerald-700">↗</span>
          </Link>

          <Link
            to="/allemp"
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-2xl text-violet-700">
              ♧
            </span>
            <span className="flex-1">
              <strong className="block">View all employees</strong>
              <span className="mt-1 block text-sm text-slate-500">
                Browse your employee records.
              </span>
            </span>
            <span className="text-slate-400 transition group-hover:text-emerald-700">↗</span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <span className="font-semibold text-emerald-800">PeopleHub</span>
          <span>Employee management, made simple.</span>
        </div>
      </footer>
    </main>
  )
}

export default Home