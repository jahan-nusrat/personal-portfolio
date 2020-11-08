import React from 'react';
import { otherProjects } from '../../data/data';
import { StyledNoteworthy } from './others.style';
import OthersList from './OthersList';

const Others = () => {
    return (
        <StyledNoteworthy className="container my-5" id="others-container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h4 style={{color:'#e6f1ff',fontSize:'1.8rem', fontWeight:'600'}}>Other Noteworthy Projects</h4>
                </div>
                {
                    otherProjects.map(project=>{
                        return <OthersList key={project.id} project={project} />
                    })
                }
            </div>
        </StyledNoteworthy>
    )
}

export default Others
