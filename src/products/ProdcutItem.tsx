
export default function ProdcutItem({ item }) {

    const handleClick = (text) => {
        alert(text);
    }

    return (
        <div className="border border-gray-200">
            <h4>{item.title}</h4>

            <button onClick={() => handleClick(item.title)} className="block border p-3 bg-red-400">Click me</button>
        </div>
    )
}
