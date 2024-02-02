from random import choice
message_templates = [
    "🌟 Survived Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Ready for challenges, Node.js exploration, and connecting with enthusiasts! https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official",
    "👋 Day # conquered in the 30 Days of Node.js on Scaler Discord!\n 🚀 Dive into challenges, explore Node.js, and engage with enthusiasts! https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official",
    "🌈 Navigated Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Tackle challenges, delve into Node.js, and connect with enthusiasts! https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official",
    "🎉 Triumphed Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Ready for adventure, Node.js exploration, and connecting with enthusiasts! https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official",
    "👊 Day # mastered in the 30 Days of Node.js on Scaler Discord!\n 🚀 Dive into challenges, Node.js exploration, and connect with enthusiasts! https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official",
    "🚀 Navigated Day # in the 30 Days of Node.js on Scaler Discord!\n 🌟 Embark on challenges, explore Node.js, and connect with enthusiasts! https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official",
    "💪 Conquered Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Ready for more challenges, Node.js exploration, and connecting with enthusiasts! https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official",
    "🌠 Triumphed Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Embark on the journey, explore Node.js, and connect with enthusiasts! https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official",
    "👏 Completed Day # in the 30 Days of Node.js on Scaler Discord!\n 🚀 Join the adventure, tackle challenges, and connect with enthusiasts! https://bit.ly/scalerdiscord #30DaysOfNodejs #ScalerDiscord @scaler_official"
]

day = input("Day > ")
print()
print("Copy and post at twitter 👇\n")
print(choice(message_templates).replace('#',day))