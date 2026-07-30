import React from "react";

/**
 * Accessible radio group rendered as a segmented button control.
 * `name` groups the inputs; `registration` is React Hook Form's register(name).
 */
export default function RadioGroupField({ legend, name, options, registration, error }) {
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-slate-700 mb-2">{legend}</legend>
      <div className="grid grid-cols-3 gap-3" role="radiogroup" aria-label={legend}>
        {options.map(({ value, label }) => {
          const id = `${name}-${value}`;
          return (
            <div key={value}>
              <input
                id={id}
                type="radio"
                value={value}
                className="peer sr-only"
                {...registration}
              />
              <label
                htmlFor={id}
                className="block text-center rounded-lg border border-slate-300 px-3 py-3 text-sm font-medium text-slate-600 cursor-pointer transition-colors hover:bg-slate-50 peer-checked:border-teal-600 peer-checked:bg-teal-50 peer-checked:text-teal-700 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-teal-600"
              >
                {label}
              </label>
            </div>
          );
        })}
      </div>
      {error && (
        <p role="alert" className="text-xs text-red-600 mt-1">
          {error.message}
        </p>
      )}
    </fieldset>
  );
}