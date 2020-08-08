USE [ELibraryMgmtSystem]
GO

/****** Object:  Table [dbo].[User_Details]    Script Date: 7/17/2020 10:14:00 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[User_Details](
	[UserName] [varchar](50) NOT NULL,
	[UserAddress] [varchar](100) NOT NULL,
	[UserPhoneNumber] [varchar](50) NOT NULL,
	[UserInterest] [varchar](50) NOT NULL,
	[UserEmail] [varchar](50) NOT NULL,
	[UserId] [int] IDENTITY(4001,1) NOT NULL,
	[UserPassword] [varchar](50) NOT NULL,
	[UserCreditCardNumber] [varchar](50) NOT NULL,
	[UserCreditCardExpiryDate] [varchar](50) NOT NULL,
	[UserCreditCardCVV] [int] NOT NULL,
	[UserTypeId] [int] NOT NULL,
 CONSTRAINT [PK_User_Details] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[User_Details]  WITH CHECK ADD  CONSTRAINT [FK_User_Details_UserType] FOREIGN KEY([UserTypeId])
REFERENCES [dbo].[UserType] ([UserTypeId])
GO

ALTER TABLE [dbo].[User_Details] CHECK CONSTRAINT [FK_User_Details_UserType]
GO


