import cx from 'classnames';

function AnimationJob({ isLightTheme }) {
    return (
        <div id="animation-job" className={cx(isLightTheme ? 'light' : 'dark')}>
            <div className="job_drow1 hightlight-job-color"></div>
            <div className="job_drow2 hightlight-job-color"></div>
            <div className="job_drow3 hightlight-job-color"></div>
            <div className="job_drow4 hightlight-job-color"></div>
            <div className="job_drow5 hightlight-job-color"></div>
            <div className="job_drow6 hightlight-job-color"></div>
            <div className="job_drow7 hightlight-job-color"></div>
            <div className="job_drow8 hightlight-job-color"></div>
            <div className="job_drow9 hightlight-job-color"></div>
            <div className="job_drow10 hightlight-job-color"></div>
            <div className="job_drow11 hightlight-job-color"></div>
        </div>
    );
}

export default AnimationJob;
