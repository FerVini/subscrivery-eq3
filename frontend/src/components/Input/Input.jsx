import "./Input.css"

export default function Input({ label, ...props }) {
    return (
        <div className="input-group">
            <input {...props} />
        </div>
    )
}