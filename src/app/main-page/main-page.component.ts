import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  public projects = {
    spike: {
      title: 'Spike Valorant',
      description: `Scale replica of the Spike created using an ESP32 microcontroller, skillfully programmed
      within the Arduino IDE environment.
      <br><br>
      <strong>Key Features:</strong>

      <strong>Mobile Integration:</strong> What truly sets this project apart is its
      integration with a mobile
      application via Blynk, allowing you to remotely activate and defuse the Spike with a
      simple touch of your fingertips.
      <br><br>
      <strong>Passionate Valorant Enthusiast:</strong> As a passionate Valorant enthusiast, I
      embarked on this
      project to encapsulate the essence of the game in a tangible and interactive form.
      <br><br>
      <strong>Technical Proficiency:</strong> This scale model not only showcases my technical
      expertise in
      microcontroller programming but also underscores my commitment to recreating the
      exciting action of Valorant in a unique and engaging way with a 3D-printed Spike model.
      <br><br>
      <strong>Pending Enhancement:</strong> Future improvements include creating threads for
      enhanced
      functionality and user experience.`,
      images: ['assets/projects/Spike_main.png', 'assets/projects/spike2.png'],
      link: `https://github.com/Mmorales87/SpikeV.2-public`,
    },
    booking: {
      title: 'Booking webapp',
      description: `Welcome to booking platform, a personal creation developed using Angular, JavaScript,
      TypeScript, Node.js, and MongoDB. This platform is designed to streamline your booking
      experience seamlessly.
      <br><br>
      <strong>Key Features:</strong>

      <strong>Easy Booking:</strong> Making a reservation is a breeze. Simply navigate through
      my user-friendly
      interface and select your desired dates and services.
      <br><br>
      <strong>Secure Database:</strong> All your reservations are securely stored in my
      MongoDB database,
      ensuring
      maximum privacy and data protection.
      <br><br>
      <strong>Try Confirmation:</strong> I invite you to try how our instant confirmation
      system works. Make a
      reservation and experience firsthand the confirmation email that will arrive in your
      inbox.
      <br><br>
      Don't wait any longer to discover the convenience of making a reservation on my
      platform.
      Whether it's booking a table at your favorite restaurant, scheduling an appointment at a
      spa, or securing a spot at a popular event, my website is your go-to destination.
      `,
      images: [
        'assets/projects/booking4.png',
        'assets/projects/booking5.png',
        'assets/projects/booking6.png',
        'assets/projects/booking7.png',
        'assets/projects/booking8.png',
      ],
      link: ``,

    //  Una vez subida la web y creado el server en aws, poner esto al final de description
    //   <br><br>
    //   Why wait?  <a href="www.google.es" target="_blank" class="py-3 px-4">
    //   Try it
    // </a> now and make your reservation today! Explore the future of hassle-free
    //   bookings!
    },
    handrelease: {
      title: 'Handrelease for keyboard',
      description: `Introducing a wrist rest crafted with Arduino, simplifying PC login via Bluetooth.
      <br><br>
      <strong>Key Features:</strong>

      <strong>Bluetooth Functionality:</strong> This wrist rest communicates with your PC
      through Bluetooth,
      making login a straightforward process.
      <br><br>
      <strong>Quick Login:</strong> It allows you to start Windows using RFID RC522, whether
      with a card,
      keychain, or your mobile phone.
      <br><br>
      <strong>OLED Display:</strong> The OLED screen displays a personalized welcome message
      when you power up
      your PC.
      <br><br>
      <strong>Ergonomic Design:</strong> Its ergonomic design ensures comfort while working or
      gaming on your
      computer.
      <br><br>
      <strong>Coffee Touch:</strong> The base is 3D-printed, coated with epoxy resin, and
      adorned with a
      coffee-inspired touch. Sanded and polished for enhanced aesthetics and finish.
      <br><br>
      This wrist rest is the perfect blend of technology and comfort, ideal for tech
      enthusiasts and coffee lovers alike.
      <br><br>
      Make your workspace smarter and more comfortable with this innovative addition!`,
      images: [
        'assets/projects/handrelease2.png',
        'assets/projects/handrelease3.png',
        'assets/projects/handrelease4.png',
        'assets/projects/handrelease5.png',
        'assets/projects/handrelease6.png',
      ],
      link: `https://github.com/Mmorales87/ESP32_Start_Windows`,
    },
    medical: {
      title: 'Control of shifts',
      description: `This versatile application offers three key sections: Doctor, Patient, and Specialty,
      making it easy to manage appointments, track patient-doctor relationships, and
      categorize medical specialties.
      <br><br>
      <strong>Key Features:</strong>
      Effortless Scheduling: With this app, you can effortlessly assign specific days and
      times to patients while linking them to their respective doctors. This ensures efficient
      and organized appointment management.
      <br><br>
      <strong>Doctor-Patient Relationship:</strong> Establish a clear and organized connection
      between patients
      and doctors, ensuring seamless communication and coordination of medical services.
      <br><br>
      <strong>Specialty Management:</strong> Categorize doctors based on their medical
      expertise, whether
      they're surgeons, dentists, dermatologists, or other specialists. This simplifies the
      process of finding the right healthcare provider.
      <br><br>
      <strong>Robust Database:</strong> The application leverages the power of SQL Server,
      providing a robust
      and secure database environment for storing critical medical and scheduling data.
      <br><br>
      <strong>Interactive Calendar:</strong> Enhance your scheduling experience with the
      FullCalendar plugin,
      powered by jQuery and Ajax. Easily view, edit, and manage appointments in a
      user-friendly calendar interface.
      <br><br>
      <strong>Security at Its Best:</strong> The app prioritizes security with the
      implementation of
      AntiForgery Token, safeguarding sensitive patient and medical information.
      <br><br>
      This agenda management app is your all-in-one solution for efficient appointment
      booking, patient-doctor relationship management, and specialty categorization. Whether
      you're a healthcare provider or a patient, streamline your scheduling needs with ease
      and precision.
      <br><br>
      Experience the future of medical appointment management.`,
      images: [
        'assets/projects/turno.png',
        'assets/projects/turno2.png',
        'assets/projects/turno3.png',
        'assets/projects/turno4.png',
        'assets/projects/turno5.png',
      ],
      link: `https://github.com/Mmorales87/ClinicalManagement-public`,
    },
    phpcrud: {
      title: 'CRUD PHP',
      description: `This project, developed using PHP, MySQL, Apache (via XAMPP), and Visual Studio Code,
      marks a significant step in my journey to mastering web development.
      <br><br>
      <strong>Key Highlights:</strong>

      <strong>Create, Read, Update, Delete:</strong> This project encompasses the fundamental
      operations of
      CRUD—Create, Read, Update, and Delete—providing practical experience in managing data
      within a web application.
      <br><br>
      <strong>LAMP Stack:</strong> Leveraging the power of the LAMP (Linux, Apache, MySQL,
      PHP) stack, I've
      gained insights into server-side scripting, database management, and dynamic web page
      creation.
      <br><br>
      <strong>Hands-on Practice:</strong> Through this project, I've honed my skills in PHP
      scripting, SQL
      database management, and server setup, turning theory into practical application.
      <br><br>
      <strong>Visual Studio Code IDE:</strong> I've embraced the efficiency of Visual Studio
      Code as my
      Integrated Development Environment (IDE), streamlining coding tasks and enhancing
      productivity.
      <br><br>
      Udemy Learning: This project was part of my Udemy course, reflecting my commitment to
      continuous learning and skill enhancement.`,
      images: [
        'assets/projects/crud_php1.PNG',
        'assets/projects/crud_php2.PNG',
        'assets/projects/crud_php2.PNG',
      ],
      link: ``,
    },
    cliorace: {
      title: 'Android game 🏁 Clio Sport Race 🏁',
      description: `Introducing my Android Studio game 2D top-down view game that puts
      you in the driver's seat of a Renault Clio Sport 182CV. Your Clio can shoot! Yes,
      it might sound unconventional for a car game, but it
      was a requirement for a school project.
      <br><br>
      <strong>Key Highlights:</strong>

      <strong>Clio Sport 182CV:</strong> Immerse yourself in the world of high-performance
      cars as you take
      control of a meticulously recreated Renault Clio Sport 182CV. Enjoy the realistic
      driving experience and feel the power under the hood.
      <br><br>
      <strong>Unexpected Twist:</strong> Get ready for a game like no other, where your Clio
      is equipped with a
      shooting mechanism. Dodge obstacles, take down targets, and navigate through challenging
      levels with this unexpected feature.
      <br><br>
      <strong>Top-Down View:</strong> The game's top-down view offers a unique perspective,
      allowing you to
      master the art of precision driving and shooting in a dynamic environment.
      <br><br>
      <strong>Visuals:</strong> The stylesheet graphics were created using Adobe Photoshop,
      enhancing the visual appeal of the game.
      <br><br>
      <strong>IntelliJ IDEA IDE:</strong> The game development process was powered by IntelliJ
      IDEA, providing
      a robust and efficient development environment.
      <br><br>
      Whether you're a car enthusiast or a gaming enthusiast, this project offers a
      one-of-a-kind gaming experience that combines the thrill of driving with the excitement
      of shooting.`,
      images: [
        'assets/projects/CSR.JPG',
        'assets/projects/CSR2.JPG',
        'assets/projects/CSR4.JPG',
        'assets/projects/CSR3.JPG',
      ],
      link: `https://github.com/Mmorales87/cliosportgame`,
    },
    objectdetection: {
      title: 'Object detection',
      description: `A combination of hardware and software using an ESP32-CAM module with object recognition
      powered by OpenCV.
      <br><br>
      <strong>Key Highlights:</strong>

      ESP32-CAM Module: The heart of this project, the ESP32-CAM, serves as a powerful
      platform for capturing images and videos. It's programmed in C and Python, showcasing
      the versatility of this hardware.
      <br><br>
      <strong>OpenCV for Object Recognition:</strong> Leveraging the capabilities of OpenCV,
      the project can
      recognize objects with precision. Whether it's detecting people, vehicles, or custom
      objects, the possibilities are extensive.
      <br><br>
      <strong>3D Printing for Custom Casing:</strong> To complete this project, I need to
      create a custom
      casing using Cinema 4D and subsequently 3D print it for the ESP32-CAM, ensuring seamless
      integration into the environment and adding a lithium battery.
      <br><br>
      <strong>Integration with Telegram Bot:</strong> For additional functionality and
      real-time alerts, I plan
      to create a Telegram bot. This will allow me to receive instant notifications when
      specific objects, such as people, are detected, enhancing security and automation.
      <br><br>
      <strong>IoT and Beyond:</strong> This project represents the future of IoT and smart
      surveillance,
      showcasing the potential of connected devices.
      <br><br>
      Join me in exploring the intersection of hardware, software, and innovation as we unlock
      new possibilities with this Arduino-based project.`,
      images: [],
      link: ``,
    },
    passmanagement: {
      title: 'Password manager',
      description: `Password Manager with CRUD functionality that currently stores platform, username, and
      password records in a MySQL database. While the user interface may not be flashy, it
      serves
      its purpose effectively.
      <br><br>
      <strong>Key Features:</strong>

      <strong>Basic Password Management:</strong> This password manager allows you to store the credentials for
      various platforms, including usernames and passwords. While it provides convenient
      access to
      your login details, it's important to note that it currently lacks advanced security
      features.
      <br><br>
      <strong>Enhanced Security:</strong> As part of future development, my top priority is to implement
      encryption
      to add an extra layer of security. This crucial enhancement will safeguard your stored
      passwords, preventing unauthorized access and potential theft by third parties.
      <br><br>
      This project is a testament to my early experiences with Java development and serves as
      a
      practical solution for managing login information.`,
      images: [
        'assets/projects/Password_manager.png',
        'assets/projects/Password_manager-data-base.png',
      ],
      link: ``,
    },
  };

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    items: 3,
  };
  projectInfo: any;

  openModal(
    title: string,
    description: string,
    images: string[],
    link: string
  ) {
    this.modalService.openModal(title, description, images, link);
  }

  // Integrar para que al abrir el modal se inicie arriba del todo
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    AOS.init({});
  }
}
