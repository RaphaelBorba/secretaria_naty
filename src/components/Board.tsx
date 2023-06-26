

export default function Board({ children }: any) {

    return (
        <main className='h-screen drop-shadow-lg flex justify-center items-center'>
            <section className="flex w-[85%] relative rounded-xl h-[800px] bg-white">
                {children}
            </section>
        </main>
    )
}