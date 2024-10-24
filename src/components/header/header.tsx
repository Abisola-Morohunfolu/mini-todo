import John from "../../assets/profile_pic.png";

const Header = () => {
  return (
    <header className="py-4 px-8 bg-[var(--color-blue)] flex items-start min-h-[123px]">
      <img alt="profile picture for john" src={John} className="w-12 h-12" />
      <div className="ml-4 md:w-[60%]">
        <h1 className="text-base font-medium mb-1">Hello, Jhon</h1>
        <em className="font-thin text-[25px] leading-4">
          What are your plans today?
        </em>
      </div>
    </header>
  );
};

export default Header;
