
import React from 'react';
import './work-card.css';

function WorkCard({ item }) {
    return (
    <div className="work-card">
        <label className="company-name">{item.company}</label>
            <div className="work-info">
                <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>

            </div>
        

    
    );           
}
  

export default WorkCard;
