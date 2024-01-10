import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-[#37444b] border-b-2 border-[#4a90e2]' : 'text-[#ADB7BE]'
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-medium ${buttonClasses}`}>
                {children}
            </p>

        </button>
    )
}

export default TabButton