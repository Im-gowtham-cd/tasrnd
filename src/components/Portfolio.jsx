import product1 from '../assets/1.jpeg'  
import product2 from '../assets/2.jpeg'
import product3 from '../assets/3.jpeg'
export default function Products() {
    const products = [
        {
            title: "Terminal Automation Systems",
            image: product1,
            description:
                "Terminal Automation System Software provided by TAS R&D, executes Tank Truck Movement control functions with greater ease & efficiency. Also the software monitors the quantity of petroleum product transferred to ensure accurate control of custody transfer operations.",
        },
        {
            title: "SCADA",
            image: product2,        
            description:
                "Is a server application that runs on LRCS and makes communication feasible between LRCS & SCADA through redundant LAN and bi-directional data transfer LRCS and SCADA.",
        },
        {
            title: "Metering Skids for Gases and Liquids",
            image: product3,
            description:
                "TAS R&D offers a wide range of primary differential pressure devices to measure flow, based on various principles of physics. These include flow elements like the Measuring Orifice, Restriction Orifice, Flow Nozzles, Venturi Tube, Cone Type flowmeters etc.",
        },
    ];

    return (
        <div className="products-container">
            <h1>Our Products</h1>
            <div className="contact-heading-border"></div>

            <div className="product-card-container">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
