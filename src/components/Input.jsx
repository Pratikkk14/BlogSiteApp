import React from 'react'


function InputBox({ title, type, name, value, svgIcon, placeholder, className = ''}) {
  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[15px]">{title}</legend>
        <div className="relative">
          {svgIcon && (
            <div
              className="svg-icon-wrapper"
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                pointerEvents: "none",
                color: "#6b7280",
                fill: "#6b7280",
                stroke: "#6b7280",
              }}
            >
              {typeof svgIcon === 'string' ? (
                <img src={svgIcon} alt="icon" style={{ width: '100%', height: '100%' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {React.cloneElement(svgIcon, {
                    style: { width: '100%', height: '100%' },
                    fill: 'currentColor',
                    stroke: 'currentColor'
                  })}
                </div>
              )}
            </div>
          )}
          
          <input
            type={type}
            className={`input ${className} ${svgIcon ? "pl-10" : ""}`}
            placeholder={placeholder}
            name={name}
            value={value}
          />
        </div>
      </fieldset>
    </div>
  );
}
export default InputBox;