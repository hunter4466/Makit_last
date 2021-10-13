const msToTime = (ms) => new Date(ms).toISOString().slice(11, -5);

export default msToTime;
