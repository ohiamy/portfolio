function Container() {
  return <div className="bg-[#ffbd4e] h-[8px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container1() {
  return <div className="bg-[#ff66a8] h-[8px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return <div className="bg-[#77c3c9] h-[8px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container3() {
  return <div className="bg-[#ff8325] h-[8px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

export default function StatBarColors() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative size-full" data-name="stat bar colors">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}