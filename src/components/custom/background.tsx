export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 w-full h-screen">
            <img
                src="/background.png"
                alt="Background 3D Abstract"
                className="w-full h-full object-cover object-center opacity-90"
            />
        </div>
    );
}