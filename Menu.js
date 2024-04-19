import React from 'react';

function Menu() {
  return (
    <section>
      <h2>Menu</h2>
      <div className="menu-item">
        <h3>Burger</h3>
        <p>A delicious burger with your choice of toppings.</p>
        <p>Price: $5.99</p>
        <img src="https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png" height="100"></img>
    
      </div>
      <div className="menu-item">
        <h3>Fries</h3>
        <p>Crispy fries served with ketchup.</p>
        <p>Price: $2.99</p>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/508/765/small/french-fries-isolated-on-background-with-generative-ai-png.png" height="100"></img>

      </div>
      <div className="menu-item">
        <h3>Soft Drink</h3>
        <p>Refreshing soft drink in various flavors.</p>
        <p>Price: $1.99</p>
        <img src="https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais" height="100"></img>
      </div>
    </section>
  );
}

export default Menu;