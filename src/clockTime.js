function convertToClockTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Example usage
//   const seconds = 100;
//   const clockTime = convertToClockTime(seconds);
//   console.log(clockTime); // Output: 1:40


export default convertToClockTime;