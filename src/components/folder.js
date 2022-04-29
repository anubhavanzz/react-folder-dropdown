import { useState } from "react";

function Folder({ explorer }) {
    const [explore, setExplore] = useState(false);
    if (explorer.isFolder) {
        return (
            <>
                <div>
                    <span onClick={() => setExplore(!explore)}>{explorer.name} </span>
                    <span style={{ display: explore ? 'block' : 'none', paddingLeft: 15 }}>
                        {explorer.items.map(exp => {
                            return (<Folder key={exp.name} explorer={exp} />)
                        })}
                    </span>
                </div>
            </>
        )
    } else {
        return (
            <>
                {explorer.name} <br />
            </>
        )
    }
}

export default Folder;