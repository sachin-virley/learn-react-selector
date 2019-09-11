(function() {
  "use strict";

  function SizeSelector(props) {
    function sizeOptions() {
      return props.sizes.map(function(num) {
        return (
          <option value={num} key={num}>
            {num}
          </option>
        );
      });
    }

    function onSizeChange(evt) {
      console.log("event changed", evt.target.value);

      props.handleSizeChange(evt.target.value);
    }

    return (
      <div className="field-group">
        <label htmlFor="size-options">Size:</label>
        <select
          defaultValue={props.size}
          name="sizeOptions"
          id="size-options"
          onChange={onSizeChange}>
          {sizeOptions()}
        </select>
      </div>
    );
  }

  function ColorSelector(props) {
    function colorOptions() {
      return props.colors.map(function(name) {
        return (
          <option value={name} key={name}>
            {name}
          </option>
        );
      });
    }

    function onColorChange(evt) {
      console.log("check", evt.target.value);
      props.handleColorChange(evt.target.value);
    }

    return (
      <div className="field-group">
        <label htmlFor="color-options">Color:</label>
        <select
          defaultValue={props.color}
          name="colorOptions"
          id="color-options"
          onChange={onColorChange}>
          {colorOptions()}
        </select>
      </div>
    );
  }

  function ProductImage(props) {
    return <img src={`${props.color}.jpg`} alt="Product Image" />;
  }

  var ProductCustomizer = createReactClass({
    getInitialState: function() {
      var sizes = window.Inventory.allSizes;
      var color = window.Inventory.allColors;

      return {
        color: "green",
        colors: color,
        size: 7,
        sizes: sizes
      };
    },

    handleSizeChange: function(selectedSize) {
      console.log("match the color", selectedSize);

      var availableColors = window.Inventory.bySize[selectedSize];
      this.setState({
        colors: availableColors,
        size: selectedSize,
        color: availableColors[0]
      });
    },

    handleColorChange: function(selectedColor) {
      console.log("match the size", selectedColor);

      var availableSize = window.Inventory.byColor[selectedColor];
      this.setState({
        sizes: availableSize,
        color: selectedColor
      });
    },

    render: function() {
      return (
        <div className="content">
          <div className="post single post-255 page type-page status-publish hentry no-featured-image">
            <div className="post-content section-inner">
              <section className="main-content">
                <form className="cart" id="cart-hplus">
                  <div className="item">
                    <h2>Selectors in React</h2>
                    <p>Shop the Shoe</p>
                    <div className="customizer">
                      <div className="product-image">
                        <ProductImage color={this.state.color} />
                      </div>
                      <div className="selectors">
                        <SizeSelector
                          size={this.state.size}
                          sizes={this.state.sizes}
                          handleSizeChange={this.handleSizeChange}
                        />
                        <ColorSelector
                          color={this.state.color}
                          colors={this.state.colors}
                          handleColorChange={this.handleColorChange}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </section>
              <div className="clear" />
            </div>
          </div>

          <div className="clear" />
        </div>
      );
    }
  });

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
