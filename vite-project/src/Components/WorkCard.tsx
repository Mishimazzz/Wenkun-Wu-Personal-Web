import React from 'react'

interface WorkCardProps
{
  logo: string;
  companyName: string;
  position:string;
  date:string;
  introduction:string;
}

export default function WorkCard({ logo, companyName, position, date, introduction }: WorkCardProps) {
  return (
    <div className="work-card">
      <div className='logo-part'>
        <div className="logo-wrapper">
          <div className="logo-border">
            <img className="company-logo" src={logo} alt={`${companyName} Logo`} />
          </div>
          <div className='line'></div>
        </div>
      </div>
      
      <div className="work-content">
        <h3>{companyName}</h3>
        <p className="position">{position}</p>
        <p className="date">{date}</p>
        <p className="description">{introduction}</p>
      </div>
    </div>
  );
}