-- CreateTable
CREATE TABLE "TimeSheet" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "checkInTime" TIMESTAMP(3) NOT NULL,
    "CheckOutTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "TimeSheet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TimeSheet" ADD CONSTRAINT "TimeSheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
