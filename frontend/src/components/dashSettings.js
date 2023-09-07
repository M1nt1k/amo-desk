import {useEffect, useState} from 'react';
import CONFIG from '../config/conf'
import SettingsForm from './settingsForm';

export default function DashSettings() {
    
    
    return (
        <div className='settings-panel'>
            <SettingsForm />
            <div className='settings-holder'>
                <span className="settings-holder-btn material-symbols-outlined">settings</span>
            </div>
        </div>
    )
}