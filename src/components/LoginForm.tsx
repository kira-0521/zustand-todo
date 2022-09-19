import React from 'react'

export const LoginForm = () => {
  return (
    <div className="flex items-center justify-center gap-x-2 h-screen">
      <label
        htmlFor="login"
        className="flex items-center justify-center gap-x-2"
      >
        <input
          type="text"
          id="login"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
      <button className="bg-sky-400 hover:bg-sky-300 text-white rounded px-2 py-1">
        ログイン
      </button>
    </div>
  )
}
