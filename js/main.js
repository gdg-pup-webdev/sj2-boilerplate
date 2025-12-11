// ==========================================
// GDG POMODORO TIMER - LIVE CODING SESSION
// ==========================================
// 
// Welcome! We'll build this timer together step by step.
// Follow along with the instructor and fill in the code below.
//
// ==========================================


// ==========================================
// 1. VARIABLES & CONFIGURATION
// ==========================================

// Time durations in seconds
// Hint: 25 minutes = 25 * 60 seconds



// Colors (CSS variable references)



// State variables (Global)
// - timeLeft: How many seconds remain on the timer
// - isRunning: Is the timer currently running? (true/false)
// - currentMode: Which mode are we in? ('focus', 'short-break', 'long-break')
// - timerInterval: Store the interval reference so we can stop it later




// ==========================================
// 2. DOM ELEMENTS (Selecting by ID)
// ==========================================
// Use document.getElementById("element-id") to select elements

// Display elements
// - timer-display: The big numbers showing time
// - timer-label: The text below the timer ("Time to focus", etc.)
// - ring-progress: The SVG circle for the progress ring



// Control buttons
// - toggle-btn: The big play/pause button
// - reset-btn: The reset button
// - toggle-icon: The icon inside the toggle button (changes between play_arrow and pause)



// Mode buttons
// - focus-btn: Focus mode button
// - short-break-btn: Short break button
// - long-break-btn: Long break button




// ==========================================
// 3. TIMER FUNCTIONS
// ==========================================

/**
 * updateTimerDisplay()
 * 
 * Updates the timer display with the current time remaining.
 * Also updates the progress ring.
 * 
 * Steps:
 * 1. Calculate minutes from timeLeft (use Math.floor)
 * 2. Calculate remaining seconds (use modulo %)
 * 3. Format as "MM:SS" with leading zeros (use padStart)
 * 4. Update the timerDisplay text content
 * 5. Calculate and update the ring progress
 */
function updateTimerDisplay() {
  // Step 1: Calculate minutes and seconds
  
  
  // Step 2: Format as "MM:SS" (use padStart to add leading zeros)
  
  
  // Step 3: Update the display
  
  
  // Step 4: Update the ring progress
  // Progress = 1 - (timeLeft / totalTime)
  
}


/**
 * startTimer()
 * 
 * Toggles the timer between running and paused states.
 * 
 * If running: Pause the timer
 * If paused: Start the timer
 * 
 * Use setInterval() to run code every 1000ms (1 second)
 * Use clearInterval() to stop the timer
 */
function startTimer() {
  if (isRunning) {
    // Timer is running, so PAUSE it
    // - Clear the interval
    // - Set isRunning to false
    // - Change the icon to "play_arrow"
    // - Update the label to "Paused"
    
    
  } else {
    // Timer is paused, so START it
    // - Set isRunning to true
    // - Change the icon to "pause"
    // - Update the label based on mode
    // - Start the interval
    
    
    // setInterval runs this function every 1000ms (1 second)
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        // Decrement time and update display
        
        
      } else {
        // Timer finished!
        // - Clear the interval
        // - Reset the state
        // - Alert the user
        
        
      }
    }, 1000);
  }
}


/**
 * resetTimer()
 * 
 * Stops the timer and resets it to the initial duration
 * of the current mode.
 */
function resetTimer() {
  // Stop any running interval
  
  
  // Reset state
  
  
  // Reset time based on current mode
  
  
  // Update the display
  
}


/**
 * setMode(mode)
 * 
 * Switches between timer modes.
 * 
 * @param {string} mode - 'focus', 'short-break', or 'long-break'
 * 
 * Steps:
 * 1. Update currentMode
 * 2. Remove 'active' class from all mode buttons
 * 3. Add 'active' class to the selected button
 * 4. Change the theme color using CSS custom properties
 * 5. Update the timer label
 * 6. Reset the timer
 */
function setMode(mode) {
  // Update current mode
  
  
  // Remove active class from all buttons
  
  
  // Get the root element for CSS variables
  const root = document.documentElement;
  
  // Set time, active class, and color based on mode
  if (mode === "focus") {
    
    
  } else if (mode === "short-break") {
    
    
  } else if (mode === "long-break") {
    
    
  }
  
  // Stop any running timer when switching modes
  
  
  // Update the display
  
}



// ==========================================
// 4. EVENT LISTENERS
// ==========================================
// Connect buttons to functions using addEventListener

// Timer controls
// startBtn.addEventListener("click", startTimer);
// resetBtn.addEventListener("click", resetTimer);



// Mode buttons
// Hint: Use arrow functions () => { ... }



// ==========================================
// 5. INITIALIZATION
// ==========================================
// Call updateTimerDisplay() to show the initial time


