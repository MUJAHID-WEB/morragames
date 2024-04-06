import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      setLoadingFinished(true);

      // Hide the loading screen after a short delay (500 milliseconds in this example)
      setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
      }, 500);
    };

    window.onload = handleLoad;

    // Calculate progress dynamically while the website is loading
    const timer = setInterval(() => {
      if (!loadingFinished) {
        const now = Date.now();
        const elapsedTime = now - startTime;
        const totalTime = 3000; // Adjust the total time (in milliseconds) according to your preference

        // Calculate the progress percentage based on elapsed time
        const progressPercentage = Math.min((elapsedTime / totalTime) * 100, 100);
        setProgress(progressPercentage);
      }

      // Clear the interval when progress reaches 100% or loading is finished
      if (loadingFinished || progress >= 100) {
        clearInterval(timer);
        setProgress(100); // Set progress to 100% when loading is finished
      }
    }, 50); // Adjust the interval frequency according to your preference

    // Cleanup function
    return () => {
      window.onload = null; // Cleanup
      clearInterval(timer);
    };
  }, [loadingFinished]);

  return (
    <div id="loading-screen" className="loading-screen">
        {/* <div style={{position:'absolute',left:'50%', top:'50%'}}>immg</div> */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
         <div style={{position:'relative', top:'-30px'}}> {Math.round(progress)}%</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

