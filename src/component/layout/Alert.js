import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    
    return <React.Fragment>
        {alertContext && alertContext.alerts.length > 0 &&
            alertContext.alerts.map(alert =>
                <div key={alert.id} className={`alert  alert_${alert.type}`}>
                    <i className="fas fa-exclamation-triangle"></i>
                    {alert.msg}
                </div>
            )}
    </React.Fragment>

};

export default Alert;