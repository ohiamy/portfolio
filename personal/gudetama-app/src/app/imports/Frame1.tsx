function Container() {
  return <div className="bg-[#ffbd4e] h-[8px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container1() {
  return <div className="bg-[#ff66a8] h-[8px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return <div className="bg-[#58c5ff] h-[8px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container3() {
  return <div className="bg-[#7ae073] h-[8px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative size-full">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}