const activities = ["https://cdn.discordapp.com/attachments/485357955341090825/964581860153888798/Need_For_Speed_Heat_Screenshot_2022.04.11_-_19.40.06.07.png", "https://cdn.discordapp.com/attachments/485357955341090825/964581860686585886/GTA5_2022-04-12_22-06-48.png", "https://cdn.discordapp.com/attachments/485357955341090825/964581861252792370/Screenshot_637.png"]



setInterval(() => {
    // generate random number between 1 and list length.
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];

    document.body.style.backgroundImage = `url(${newActivity})`;
  }, 60000);
