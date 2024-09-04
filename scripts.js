const bildeKnapp = document.getElementById('vis-bilde-knapp');
    const bildeElement = document.getElementById('bilde');

    const bilder = [
      'https://i.redd.it/vk2vuihmf6s61.jpg',
      'https://i1.sndcdn.com/artworks-ooGEYCL4wuDB5Bje-71E8NA-t500x500.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5srJEfH7AfUGsHfZyaUrtWZKCn0ARBsKQhXEpc3dTxopIR0zRM3r5bf-8rK64H5xN5i8&usqp=CAU',
      'https://preview.redd.it/30nm66po8smd1.png?width=1080&crop=smart&auto=webp&s=5267cd4c25c9e168669e4d9af3a1125023eac279',
      'https://i.pinimg.com/originals/a4/8b/df/a48bdf112c602a124e415775958d4327.jpg'
    ];

    bildeKnapp.addEventListener('click', () => {
      const tilfeldigIndex = Math.floor(Math.random() * bilder.length);
      const tilfeldigBilde = bilder[tilfeldigIndex];
      bildeElement.src = tilfeldigBilde;
    });