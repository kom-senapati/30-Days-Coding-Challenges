from random import choice
message_templates = [
    "🌟 Survived Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Ready for challenges, Node.js exploration, and connecting with enthusiasts!",
    "👋 Day # conquered in the 30 Days of Node.js on Scaler Discord!\n 🚀 Dive into challenges, explore Node.js, and engage with enthusiasts!",
    "🌈 Navigated Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Tackle challenges, delve into Node.js, and connect with enthusiasts!",
    "🎉 Triumphed Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Ready for adventure, Node.js exploration, and connecting with enthusiasts!",
    "👊 Day # mastered in the 30 Days of Node.js on Scaler Discord!\n 🚀 Dive into challenges, Node.js exploration, and connect with enthusiasts!",
    "🚀 Navigated Day # in the 30 Days of Node.js on Scaler Discord!\n 🌟 Embark on challenges, explore Node.js, and connect with enthusiasts!",
    "💪 Conquered Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Ready for more challenges, Node.js exploration, and connecting with enthusiasts!",
    "🌠 Triumphed Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Embark on the journey, explore Node.js, and connect with enthusiasts!",
    "👏 Completed Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Join the adventure, tackle challenges, and connect with enthusiasts!"
]

day = input("Day > ")
print()
print("Copy and post at twitter 👇\n")
print(choice(message_templates).replace('#',day) + "https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official")