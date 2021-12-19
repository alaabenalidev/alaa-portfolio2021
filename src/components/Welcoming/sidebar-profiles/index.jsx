import React from 'react'

const SidebarProfiles = ({data}) => {
    const profileInfo = data.single
    return (
        <a href={profileInfo.url} target="_blank" className="text-secondary d-block align-self-center w-100 h-100">
            <i className={"uil "+profileInfo.icon + " " + profileInfo.classes}/>
        </a>
    )
}
/*<a href={profile.url} target="_blank" className="text-secondary d-block align-self-center">
    <i className={profile.icon + " " + profile.classes}/>
</a>*/
export default SidebarProfiles;
