# 🍅 Pomodoro Timer Flowchart (Mermaid)

This document contains Mermaid flowcharts illustrating how the GDG Pomodoro Timer works.

---

## 📊 Complete Application Flow

```mermaid
flowchart TD
    subgraph INIT["🚀 Initialization"]
        A[Application Start] --> B[Initialize Variables]
        B --> C[Get DOM Elements]
        C --> D[Attach Event Listeners]
        D --> E[updateTimerDisplay]
        E --> F((Waiting for User Input))
    end

    subgraph VARS["📦 Initial State"]
        B --> B1["timeLeft = 1500s (25 min)"]
        B --> B2["isRunning = false"]
        B --> B3["currentMode = 'focus'"]
        B --> B4["timerInterval = null"]
    end

    subgraph DOM["🎯 DOM Elements"]
        C --> C1["Timer Display & Label"]
        C --> C2["Ring Progress SVG"]
        C --> C3["Start/Reset Buttons"]
        C --> C4["Mode Buttons"]
    end

    subgraph EVENTS["🔗 Event Listeners"]
        D --> D1["Start Btn → startTimer()"]
        D --> D2["Reset Btn → resetTimer()"]
        D --> D3["Mode Btns → setMode()"]
    end

    F --> |User clicks Start| G[startTimer]
    F --> |User clicks Reset| H[resetTimer]
    F --> |User clicks Mode| I[setMode]

    style A fill:#4285F4,color:#fff
    style F fill:#34A853,color:#fff
    style G fill:#EA4335,color:#fff
    style H fill:#FBBC04,color:#000
    style I fill:#4285F4,color:#fff
```

---

## ▶️ Start/Pause Timer Flow

```mermaid
flowchart TD
    A[/"👆 User clicks START/PAUSE"/] --> B{Is timer running?<br/>isRunning?}
    
    B -->|YES| C["⏸️ PAUSE TIMER"]
    B -->|NO| D["▶️ START TIMER"]
    
    subgraph PAUSE["Pause Actions"]
        C --> C1["clearInterval(timerInterval)"]
        C1 --> C2["isRunning = false"]
        C2 --> C3["Icon → 'play_arrow'"]
        C3 --> C4["Label → 'Paused'"]
    end
    
    subgraph START["Start Actions"]
        D --> D1["isRunning = true"]
        D1 --> D2["Icon → 'pause'"]
        D2 --> D3{"currentMode?"}
        D3 -->|focus| D4["Label → 'Stay focused'"]
        D3 -->|break| D5["Label → 'Take a break'"]
        D4 --> D6["Start setInterval (1000ms)"]
        D5 --> D6
    end
    
    D6 --> E["⏱️ INTERVAL TICK"]
    E --> F{timeLeft > 0?}
    
    F -->|YES| G["timeLeft -= 1"]
    G --> H["updateTimerDisplay()"]
    H --> E
    
    F -->|NO| I["⏰ TIMER COMPLETE"]
    I --> J["clearInterval()"]
    J --> K["isRunning = false"]
    K --> L["Icon → 'play_arrow'"]
    L --> M["alert('Time is up!')"]
    
    C4 --> N((Wait for Input))
    M --> N

    style A fill:#4285F4,color:#fff
    style C fill:#FBBC04,color:#000
    style D fill:#34A853,color:#fff
    style I fill:#EA4335,color:#fff
    style N fill:#34A853,color:#fff
```

---

## 🔄 Reset Timer Flow

```mermaid
flowchart TD
    A[/"👆 User clicks RESET"/] --> B["clearInterval(timerInterval)"]
    B --> C["isRunning = false"]
    C --> D["Icon → 'play_arrow'"]
    D --> E{"What is currentMode?"}
    
    E -->|"focus"| F["timeLeft = 25 × 60<br/>(1500 seconds)"]
    E -->|"short-break"| G["timeLeft = 5 × 60<br/>(300 seconds)"]
    E -->|"long-break"| H["timeLeft = 15 × 60<br/>(900 seconds)"]
    
    F --> I["updateTimerDisplay()"]
    G --> I
    H --> I
    
    I --> J((Ready for Input))

    style A fill:#FBBC04,color:#000
    style F fill:#4285F4,color:#fff
    style G fill:#34A853,color:#fff
    style H fill:#FBBC04,color:#000
    style J fill:#34A853,color:#fff
```

---

## 🎨 Switch Mode Flow

```mermaid
flowchart TD
    A[/"👆 User clicks MODE button"/] --> B["currentMode = selected mode"]
    B --> C["Remove 'active' class<br/>from ALL mode buttons"]
    C --> D{"Which mode selected?"}
    
    D -->|"focus"| E["🔵 FOCUS MODE"]
    D -->|"short-break"| F["🟢 SHORT BREAK"]
    D -->|"long-break"| G["🟡 LONG BREAK"]
    
    subgraph FOCUS["Focus Configuration"]
        E --> E1["timeLeft = 25 min"]
        E1 --> E2["Add 'active' to focusBtn"]
        E2 --> E3["Theme color → BLUE"]
        E3 --> E4["Label → 'Ready to focus?'"]
    end
    
    subgraph SHORT["Short Break Configuration"]
        F --> F1["timeLeft = 5 min"]
        F1 --> F2["Add 'active' to shortBreakBtn"]
        F2 --> F3["Theme color → GREEN"]
        F3 --> F4["Label → 'Time for a break'"]
    end
    
    subgraph LONG["Long Break Configuration"]
        G --> G1["timeLeft = 15 min"]
        G1 --> G2["Add 'active' to longBreakBtn"]
        G2 --> G3["Theme color → YELLOW"]
        G3 --> G4["Label → 'Time for a long break'"]
    end
    
    E4 --> H["Stop any running timer"]
    F4 --> H
    G4 --> H
    
    H --> I["clearInterval()"]
    I --> J["isRunning = false"]
    J --> K["Icon → 'play_arrow'"]
    K --> L["updateTimerDisplay()"]
    L --> M((Ready for Input))

    style A fill:#4285F4,color:#fff
    style E fill:#4285F4,color:#fff
    style F fill:#34A853,color:#fff
    style G fill:#FBBC04,color:#000
    style M fill:#34A853,color:#fff
```

---

## ⏱️ Update Display Flow

```mermaid
flowchart TD
    A["updateTimerDisplay()"] --> B["Calculate time values"]
    
    subgraph CALC["⏱️ Time Calculation"]
        B --> B1["minutes = Math.floor(timeLeft / 60)"]
        B --> B2["seconds = timeLeft % 60"]
    end
    
    B1 --> C["Format as MM:SS"]
    B2 --> C
    
    subgraph FORMAT["📝 Formatting"]
        C --> C1["Pad minutes with leading zero"]
        C --> C2["Pad seconds with leading zero"]
        C1 --> C3["Join with ':'"]
        C2 --> C3
    end
    
    C3 --> D["timerDisplay.textContent = formattedTime"]
    
    D --> E["Calculate ring progress"]
    
    subgraph PROGRESS["🔄 Ring Progress"]
        E --> E1{"currentMode?"}
        E1 -->|focus| E2["totalTime = 1500"]
        E1 -->|short-break| E3["totalTime = 300"]
        E1 -->|long-break| E4["totalTime = 900"]
        E2 --> E5["progress = 1 - (timeLeft / totalTime)"]
        E3 --> E5
        E4 --> E5
    end
    
    E5 --> F["ringProgress.style.strokeDashoffset = progress"]
    F --> G(("Display Updated ✓"))

    style A fill:#4285F4,color:#fff
    style G fill:#34A853,color:#fff
```

---

## 🗺️ State Diagram

```mermaid
stateDiagram-v2
    [*] --> Idle: App Loaded
    
    Idle --> Running: Click Start
    Running --> Paused: Click Pause
    Paused --> Running: Click Start
    Running --> Completed: timeLeft = 0
    Completed --> Idle: Dismiss Alert
    
    Idle --> Idle: Click Reset
    Running --> Idle: Click Reset
    Paused --> Idle: Click Reset
    
    Idle --> Idle: Switch Mode
    Running --> Idle: Switch Mode
    Paused --> Idle: Switch Mode
    
    state Idle {
        [*] --> Focus
        Focus --> ShortBreak: Click Short Break
        Focus --> LongBreak: Click Long Break
        ShortBreak --> Focus: Click Focus
        ShortBreak --> LongBreak: Click Long Break
        LongBreak --> Focus: Click Focus
        LongBreak --> ShortBreak: Click Short Break
    }
```

---

## 📋 Mode Configuration Chart

```mermaid
pie showData
    title Timer Durations (in minutes)
    "Focus (25 min)" : 25
    "Short Break (5 min)" : 5
    "Long Break (15 min)" : 15
```

---

## 🎯 Component Relationship

```mermaid
graph LR
    subgraph HTML["📄 HTML Elements"]
        A["timer-display"]
        B["timer-label"]
        C["ring-progress"]
        D["toggle-btn"]
        E["reset-btn"]
        F["focus-btn"]
        G["short-break-btn"]
        H["long-break-btn"]
    end
    
    subgraph JS["⚡ JavaScript Functions"]
        I["updateTimerDisplay()"]
        J["startTimer()"]
        K["resetTimer()"]
        L["setMode()"]
    end
    
    subgraph STATE["📦 State Variables"]
        M["timeLeft"]
        N["isRunning"]
        O["currentMode"]
        P["timerInterval"]
    end
    
    D --> J
    E --> K
    F --> L
    G --> L
    H --> L
    
    J --> M
    J --> N
    J --> P
    J --> I
    
    K --> M
    K --> N
    K --> P
    K --> I
    
    L --> M
    L --> O
    L --> N
    L --> P
    L --> I
    
    I --> A
    I --> C
    L --> B

    style I fill:#4285F4,color:#fff
    style J fill:#EA4335,color:#fff
    style K fill:#FBBC04,color:#000
    style L fill:#34A853,color:#fff
```

---

## 📊 Summary Table

| Mode | Duration | Color | CSS Variable | Label |
|------|----------|-------|--------------|-------|
| 🔵 Focus | 25 min | Blue | `--google-blue` | "Ready to focus?" |
| 🟢 Short Break | 5 min | Green | `--google-green` | "Time for a break" |
| 🟡 Long Break | 15 min | Yellow | `--google-yellow` | "Time for a long break" |

---

*Generated from the GDG Pomodoro Timer Live Project*

> 💡 **Tip**: View this file on GitHub or in a Mermaid-compatible Markdown viewer to see the rendered diagrams!
