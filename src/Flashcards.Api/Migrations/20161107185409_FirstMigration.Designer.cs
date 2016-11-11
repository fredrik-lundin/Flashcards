using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Flashcards.Api.DataAccess;

namespace Flashcards.Api.Migrations
{
    [DbContext(typeof(FlashcardsContext))]
    [Migration("20161107185409_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-preview1-22509")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Flashcards.Api.Models.Flashcard", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("SentenceFrom");

                    b.Property<string>("SentenceTo");

                    b.Property<string>("WordAnswerTitle");

                    b.Property<string>("WordAnswerType");

                    b.Property<string>("WordToCheck");

                    b.HasKey("Id");

                    b.ToTable("Flashcards");
                });
        }
    }
}
