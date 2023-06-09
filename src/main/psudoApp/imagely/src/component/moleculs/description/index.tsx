interface IProps {
  text?: string;
}

export default function DescriptionContent(props: IProps) {
  const {
    text = `ستاره کم‌نور در مرکز این صحنه، حلقه‌هایی از گاز و گرد و غبار را به مدت هزاران سال در همه جهت‌ها می‌فرستد. تلسکوپ فضایی جیمز وب برای نخستین بار نشان می‌دهد که این ستاره در هاله‌ای از گرد و غبار پوشیده شده است. دو دوربین وب آخرین عکس‌ این سحابی سیاره‌‌ای را با نام NGC 3132 و نام غیر رسمی سحابی حلقه‌ای جنوبی، ثبت کردند. فاصله سحابی تا زمین در حدود ۲۵۰۰ سال نوری است. تلسکوپ وب به ستاره‌شناسان اجازه خواهد داد که سحابی‌های سیاره‌ای بسیاری همانند سحابی نشان داده شده در عکس را با جرئیات دقیق مطالعه کنند.
این مورد از عکس های تلسکوپ جیمز وب تقریبا حلقه‌ای جنوبی را از روبرو نشان می‌دهد، اما اگر بتوانیم آن را به سمت لبه بچرخانیم، شکل سه‌بعدی سحابی را خواهیم دید.
دو ستاره در مداری فشرده به یکدیگر قفل شده‌اند. عکس‌های فروسرخ تلسکوپ وب جزئیات جدید از این سیستم پیچیده را به طور برجسته نشان می‌دهد. عکس سمت چپ ستاره‌ها و لایه‌های نوری آن‌ها را نشان می‌دهد. این عکس توسط دوربین فروسرخ نزدیک ثبت شده است. تصویر ثبت شده توسط فروسرخ میانی (عکس سمت چپ)، برای نخستین بار نشان می‌دهد که ستاره دوم توسط گرد و غبار احاطه شده است. ستاره درخشان‌تر در مرحله‌ ابتدایی تکامل ستاره‌ای خود قرار دارد و سحابی ستاره‌ای خود را در آینده بیرون خواهد انداخت.`,
  } = props;

  return (
    <div className="w-1/2">
      <h1 className="text-indigo-600 mb-4 text-lg font-medium text-center">
        توضیحات
      </h1>
      <p className="text-zinc-700 mx-8 font-semibold text-end">{text}</p>
    </div>
  );
}
