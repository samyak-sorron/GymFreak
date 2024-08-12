import Logo from "@/assets/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo}/>
                <p className="my-5">something</p>
                <p>Evogym All Rights Reserved</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h2 className="font-bold">Links</h2>
                <p className="my-5">a</p>
                <p className="my-5">b</p>
                <p className="my-5">c</p>
            </div>
            <div className="mt-16 basis-1/2 md:mt-0">
            <h2 className="font-bold">Contact Us</h2>
                <p className="my-5">contact us for any reason</p>
                <p>(333)425-6825</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer